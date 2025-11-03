import { useState } from "preact/hooks";
import {
  Phone,
  Mail,
  Building,
  User,
  Clock,
  Linkedin,
  Github,
  Instagram,
} from "lucide-preact";

import { Section, SectionHeading } from "../../components/site/section";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { services } from "../../lib/data";
import Header from "../../components/site/header";
import Footer from "../../components/site/footer";

// Backend API endpoint
const BACKEND_API_URL = 'http://localhost:5000/send-email';

type StatusType = 'success' | 'error' | 'loading' | null;

const socialLinks = [
  { href: "#", icon: Linkedin },
  { href: "#", icon: Github },
  { href: "#", icon: Instagram },
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<StatusType>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    let isValid = true;

    // Name validation
    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = "Please select a service.";
      isValid = false;
    }

    // Message validation
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Prepare email data for backend
      const emailData = {
        name: formData.name,
        email: formData.email,
        message: `
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Service Interest: ${formData.subject}

Message:
${formData.message}
        `.trim()
      };

      const response = await fetch(BACKEND_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        
        // Clear errors
        setErrors({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send email. Please try again.');
        setTimeout(() => {
          setStatus(null);
          setErrorMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
      setErrorMessage('Cannot connect to server. Please make sure the backend is running.');
      setTimeout(() => {
        setStatus(null);
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value,
    });
  };

  return (
    <Section id="contact" className="relative pt-4 md:pt-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/50"></div>
      <SectionHeading title="Get In Touch" />
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-1">
          <div className="space-y-2">
            <h3 className="font-headline text-xl font-semibold">
              Contact Information
            </h3>
            <p className="flex items-center gap-3">
              <Building className="h-5 w-5 text-primary" />
              iotelligence SOFTWARE SOLUTIONS
            </p>
            <p className="flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />
              Rajat Metry (Director)
            </p>
            <a href="tel:+919158151405" className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              +91 9158151405
            </a>
            <a href="tel:+917709566278" className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              +91 7709566278
            </a>
            <a
              href="mailto:rajat_metry@iotelligence.in"
              className="flex items-center gap-3"
            >
              <Mail className="h-5 w-5 text-primary" />
              rajat_metry@iotelligence.in
            </a>
          </div>
          <div className="space-y-2">
            <h3 className="font-headline text-xl font-semibold">
              Business Hours
            </h3>
            <p className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              Monday - Friday: 9am - 6pm
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-headline text-xl font-semibold">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg border bg-card p-6 shadow-sm"
          >
            {/* Success Message */}
            {status === 'success' && (
              <div className="rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-500 p-4 text-green-700 dark:text-green-300">
                <p className="font-semibold">Success!</p>
                <p className="text-sm">Your message has been sent successfully. We'll get back to you within 24 hours!</p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-500 p-4 text-red-700 dark:text-red-300">
                <p className="font-semibold">Error!</p>
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onInput={handleChange}
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onInput={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone (Optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onInput={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onInput={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject/Service Interest
              </label>
              <Select onValueChange={handleSelectChange} value={formData.subject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.title} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                className="min-h-[120px]"
                value={formData.message}
                onInput={handleChange}
                required
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full shadow-lg transition-all hover:shadow-primary/40"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : status === 'success' ? (
                'Sent Successfully!'
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}