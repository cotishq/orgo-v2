import { useState, useRef, FormEvent } from 'react';
import { X, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobDepartment: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ApplicationModal({ isOpen, onClose, jobTitle, jobDepartment }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    linkedIn: '',
    coverLetter: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    // Simulate form submission - In production, replace with actual API call
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('jobTitle', jobTitle);
      submitData.append('jobDepartment', jobDepartment);
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });
      if (resume) {
        submitData.append('resume', resume);
      }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, always succeed
      // In production: await fetch('/api/apply', { method: 'POST', body: submitData });

      setSubmitStatus('success');

      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          experience: '',
          currentCompany: '',
          linkedIn: '',
          coverLetter: '',
        });
        setResume(null);
        setSubmitStatus('idle');
        onClose();
      }, 2000);
    } catch {
      setSubmitStatus('error');
    }
  };

  const handleClose = () => {
    if (submitStatus === 'submitting') return;
    setSubmitStatus('idle');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Apply for Position</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {jobTitle} • {jobDepartment}
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                disabled={submitStatus === 'submitting'}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Success State */}
          {submitStatus === 'success' && (
            <div className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-600">
                Thank you for applying. We'll review your application and get back to you soon.
              </p>
            </div>
          )}

          {/* Error State */}
          {submitStatus === 'error' && (
            <div className="p-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-medium">Submission failed</p>
                  <p className="text-red-600 text-sm mt-1">
                    Please try again or contact us at careers@orgogroup.in
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSubmitStatus('idle')}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Form */}
          {(submitStatus === 'idle' || submitStatus === 'submitting') && (
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Experience & Current Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                  >
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Company
                  </label>
                  <input
                    type="text"
                    id="currentCompany"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your current employer"
                  />
                </div>
              </div>

              {/* LinkedIn */}
              <div>
                <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV <span className="text-red-500">*</span>
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  required={!resume}
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  {resume ? (
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">{resume.name}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResume(null);
                          if (fileInputRef.current) {
                            fileInputRef.current.value = '';
                          }
                        }}
                        className="ml-2 text-gray-500 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        <span className="text-primary font-medium">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                    </>
                  )}
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us why you'd be a great fit for this role..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitStatus === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this application, you agree to our privacy policy and consent to be contacted regarding this position.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
