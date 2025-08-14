import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
    preferredContact: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryOptions = [
    { value: 'general', label: 'General Questions' },
    { value: 'reservations', label: 'Reservations' },
    { value: 'events', label: 'Private Events & Catering' },
    { value: 'feedback', label: 'Feedback & Reviews' },
    { value: 'dietary', label: 'Dietary Accommodations' },
    { value: 'media', label: 'Media Inquiries' }
  ];

  const contactMethodOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'text', label: 'Text Message' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData?.subject?.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (!formData?.preferredContact) {
      newErrors.preferredContact = 'Please select your preferred contact method';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors)?.length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: '',
        preferredContact: '',
        newsletter: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 shadow-brand text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Thank You for Reaching Out!
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We've received your message and will get back to you within 24 hours. 
          For urgent matters, please call us directly at (555) 123-4567.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 shadow-brand">
      <div className="mb-8">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We'd love to hear from you! Whether you have questions about our menu, 
          want to make a reservation, or need assistance with dietary accommodations, 
          our team is here to help.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={handleInputChange}
            error={errors?.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={handleInputChange}
            error={errors?.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="(555) 123-4567"
            value={formData?.phone}
            onChange={handleInputChange}
            error={errors?.phone}
            required
          />

          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryOptions}
            value={formData?.inquiryType}
            onChange={(value) => handleSelectChange('inquiryType', value)}
            error={errors?.inquiryType}
            required
          />
        </div>

        <Input
          label="Subject"
          type="text"
          name="subject"
          placeholder="Brief description of your inquiry"
          value={formData?.subject}
          onChange={handleInputChange}
          error={errors?.subject}
          required
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Please provide details about your inquiry..."
            value={formData?.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-vertical ${
              errors?.message ? 'border-error' : 'border-border hover:border-primary/50'
            }`}
            required
          />
          {errors?.message && (
            <p className="mt-2 text-sm text-error">{errors?.message}</p>
          )}
        </div>

        <Select
          label="Preferred Contact Method"
          placeholder="How would you like us to respond?"
          options={contactMethodOptions}
          value={formData?.preferredContact}
          onChange={(value) => handleSelectChange('preferredContact', value)}
          error={errors?.preferredContact}
          required
        />

        <div className="border-t border-border pt-6">
          <Checkbox
            label="Subscribe to our newsletter for updates on seasonal menus and special events"
            checked={formData?.newsletter}
            onChange={handleInputChange}
            name="newsletter"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                phone: '',
                inquiryType: '',
                subject: '',
                message: '',
                preferredContact: '',
                newsletter: false
              });
              setErrors({});
            }}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Clear Form
          </Button>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 mt-6">
          <div className="flex items-start space-x-3">
            <Icon name="Clock" size={20} className="text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Response Time</h4>
              <p className="text-sm text-muted-foreground">
                We typically respond to inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;