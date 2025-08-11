import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import {cn} from "@/lib/utils"
import emailjs from '@emailjs/browser';
import { useState } from "react";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_16h4gyj', // Ganti dengan Service ID Anda
                'template_x7il78l', // Ganti dengan Template ID Anda
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                'hkA0NafoZy41zHXT7' // Ganti dengan Public Key Anda
            );
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again.');
        }
        
        setLoading(false);
    };

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Get In <span className="text-primary"> Touch</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
                I’m always excited to hear about new ideas and collaborations. Let’s connect if you have something in mind!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:mmhdagung7@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    mmhdagung7@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+6285281014095" className="text-muted-foreground hover:text-primary transition-colors">
                                    + 62 852 - 8101 - 4095
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Jakarta, Indonesia
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/moehammad-agung-putra-darmawan-a2466022a/" target="_blank">
                                <Linkedin/>
                            </a>
                            <a href="https://www.instagram.com/mmhdagungg/" target="_blank">
                                <Instagram/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="Agung ..."
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="Example@gmail.com"   
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea  
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none mb-3" 
                                placeholder="Hai, i'd like to talk about..."
                            />

                            <button 
                                type="submit" 
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    loading && "opacity-50 cursor-not-allowed"
                                )}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                                <Send size={16}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}