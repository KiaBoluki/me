
import PricingCard from './PricingCard';

const Pricing = () => {
  const pricingData = [
    {
      title: 'Basic',
      subtitle: 'Best For: Simple Start',
      price: '50 OMR',
      features: [
        { name: 'Homepage', description: 'Your main page with branding', included: true },
        { name: 'About Us + Services', description: 'Details about your center', included: true },
        { name: 'Contact Form', description: 'Let customers reach you', included: true },
        { name: 'Modern Design', description: 'Looks clean and professional', included: true },
        { name: 'Easy to Find Online (SEO)', description: 'Helps Google show your site', included: true },
        { name: 'Online Booking System', included: false },
        { name: 'Loyalty Program', included: false },
        { name: 'Cryotherapy Info Page', included: false },
        { name: 'WhatsApp Auto-Reply Bot', included: false },
        { name: 'Referral Rewards', included: false },
      ],
      color: 'blue',
    },
    {
      title: 'Premium',
      subtitle: 'Best For: Growing Clients',
      price: '125 OMR',
      features: [
        { name: 'Homepage', description: 'Your main page with branding', included: true },
        { name: 'About Us + Services', description: 'Details about your center', included: true },
        { name: 'Contact Form', description: 'Let customers reach you', included: true },
        { name: 'Modern Design', description: 'Looks clean and professional', included: true },
        { name: 'Easy to Find Online (SEO)', description: 'Helps Google show your site', included: true },
        { name: 'Online Booking System', description: 'Book appointments easily', included: true },
        { name: 'Loyalty Program', description: 'Reward repeat customers', included: true },
        { name: 'Cryotherapy Info Page', description: 'Educate clients about cryo', included: true },
        { name: 'WhatsApp Auto-Reply Bot', included: false },
        { name: 'Referral Rewards', included: false },
      ],
      color: 'orange',
    },
    {
      title: 'Professional',
      subtitle: 'Best For: Full Business',
      price: '310 OMR',
      features: [
        { name: 'Homepage', description: 'Your main page with branding', included: true },
        { name: 'About Us + Services', description: 'Details about your center', included: true },
        { name: 'Contact Form', description: 'Let customers reach you', included: true },
        { name: 'Modern Design', description: 'Looks clean and professional', included: true },
        { name: 'Easy to Find Online (SEO)', description: 'Helps Google show your site', included: true },
        { name: 'Online Booking System', description: 'Book appointments easily', included: true },
        { name: 'Loyalty Program', description: 'Reward repeat customers', included: true },
        { name: 'Cryotherapy Info Page', description: 'Educate clients about cryo', included: true },
        { name: 'WhatsApp Auto-Reply Bot', description: 'Quick answers on WhatsApp', included: true },
        { name: 'Referral Rewards', description: 'Clients invite friends for perks', included: true },
        { name: 'Email Promotions Tool', description: 'Send offers to clients', included: true },
        { name: 'Digital Coupons', description: 'Create discounts for clients', included: true },
        { name: 'Welcome Emails', description: 'Thank new clients automatically', included: true },
        { name: 'Live Chat with Visitors', description: 'Answer questions in real-time', included: true },
        { name: 'Analytics to Track Growth', description: 'See how your site performs', included: true },
      ],
      color: 'green',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-8">Pricing Plans for Your Services</h1>
      <div className="pricing-table grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            subtitle={plan.subtitle}
            price={plan.price}
            features={plan.features}
            color={plan.color}
          />
        ))}
      </div>
      <div className="notes mt-8 text-left text-gray-600 text-sm">
        <p><strong>Extra Details:</strong></p>
        <p>- <strong>Add-On Costs:</strong> Some features (like WhatsApp or booking) might need yearly fees (~5-50 OMR) for third-party services. I’ll let you know if this applies.</p>
        <p>- <strong>Hosting/Domain:</strong> Not included (~20-30 OMR/year).</p>
        <p>- <strong>Examples:</strong> Premium: 125 OMR + ~20-30 OMR/year hosting | Professional: 310 OMR + ~20-30 OMR/year hosting</p>
      </div>
    </div>
  );
};

export default Pricing;