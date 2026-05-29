import React from 'react';
import { Check, Zap, Rocket, Crown, Star } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
  const { user, subscribe } = useAuth();
  const navigate = useNavigate();

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$4.99',
      description: 'Perfect for casual watchers',
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      features: ['HD Streaming (720p)', 'Standard Library Access', 'Ad-supported', '1 Screen'],
      color: 'blue'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$9.99',
      description: 'The best value for enthusiasts',
      icon: <Rocket className="w-6 h-6 text-primary" />,
      features: ['Full HD Streaming (1080p)', 'Complete Library Access', 'Ad-free experience', 'Offline downloads', '2 Screens simultaneously'],
      color: 'primary',
      popular: true
    },
    {
      id: 'ultra',
      name: 'Ultra',
      price: '$14.99',
      description: 'The ultimate anime experience',
      icon: <Crown className="w-6 h-6 text-amber-500" />,
      features: ['4K Ultra HD + HDR', 'Early access to new episodes', 'Exclusive behind-the-scenes', 'Highest quality audio', '4 Screens simultaneously'],
      color: 'amber'
    }
  ];

  const handleSubscribe = (planId: any) => {
    if (!user) {
      toast.error('Please sign in first');
      navigate('/login');
      return;
    }
    
    // Mock payment processing
    const toastId = toast.loading('Processing payment...');
    
    setTimeout(() => {
      subscribe(planId);
      toast.success('Successfully subscribed!', { id: toastId });
      navigate('/browse');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Choose Your Power-Up</h1>
        <p className="text-lg text-muted-foreground">
          Unlock the full potential of AniStream. Select a plan that fits your viewing style and start your journey today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
              plan.popular ? 'border-primary scale-105' : 'border-border hover:border-primary/50'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rotate-45 translate-x-3 translate-y-1 w-24 text-center">
                  POPULAR
                </div>
              </div>
            )}
            
            <CardHeader className="text-center">
              <div className="mx-auto bg-muted p-3 rounded-2xl w-fit mb-4">
                {plan.icon}
              </div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="h-px bg-border w-full my-2" />
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className={`p-0.5 rounded-full ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </CardContent>
            
            <CardFooter>
              <Button 
                className={`w-full h-12 font-bold ${plan.popular ? '' : 'variant-secondary'}`}
                onClick={() => handleSubscribe(plan.id)}
                disabled={user?.subscriptionTier === plan.id}
              >
                {user?.subscriptionTier === plan.id ? 'Current Plan' : 'Select Plan'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-20 text-center bg-muted/50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-5 h-5 fill-amber-500 text-amber-500" />
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4">"Best anime streaming service I've ever used!"</h3>
        <p className="text-muted-foreground mb-6 italic">
          "The interface is so clean, and the library is massive. AniStream Premium is absolutely worth it for the 4K quality alone."
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">JD</div>
          <div className="text-left">
            <p className="font-bold text-sm">John Doe</p>
            <p className="text-xs text-muted-foreground">Premium Subscriber</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;