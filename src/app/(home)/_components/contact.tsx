import { useState, useEffect } from "preact/hooks";
import { Section } from "../../../components/site/section";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import Slime3D from "./Slime3D";

// Backend API endpoint
const BACKEND_API_URL = 'http://localhost:5000/send-email';

type StatusType = 'success' | 'error' | 'loading' | null;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<StatusType>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint (768px)
    };

    // Check initially
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(BACKEND_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 3000);
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

  return (
    <Section id="contact" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/50"></div>
      <div className="grid gap-12 md:grid-cols-2">
        {isLargeScreen && (
          <div className="space-y-4">
            <Slime3D />
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg border bg-card p-6 shadow-sm"
        >
          <div className={"text-gray-400"}>Get In Touch</div>
          <h3 className={"text-5xl font-extrabold mt-2"}>Contact</h3>

          {/* Success Message */}
          {status === 'success' && (
            <div className="rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-500 p-4 text-green-700 dark:text-green-300">
              <p className="font-semibold">Success!</p>
              <p className="text-sm">Your message has been sent successfully. We'll be in touch soon!</p>
            </div>
          )}

          {/* Error Message */}
          {status === 'error' && (
            <div className="rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-500 p-4 text-red-700 dark:text-red-300">
              <p className="font-semibold">Error!</p>
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
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
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
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
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onInput={handleChange}
              required
            />
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
    </Section>
  );
}