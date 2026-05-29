import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Play, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/browse';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      login(email);
      setIsSubmitting(false);
      toast.success('Welcome back to AniStream!');
      navigate(from, { replace: true });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto bg-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <Play className="text-primary-foreground w-8 h-8 fill-current" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Sign in to your account</h1>
          <p className="text-muted-foreground mt-2">Enter your details to access your watchlist</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border/50 shadow-xl space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <button type="button" className="text-xs text-primary hover:underline">Forgot password?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-11 font-bold" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>Sign In <ArrowRight className="ml-2 w-4 h-4" /></>
            )}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" type="button" className="w-full" disabled={isSubmitting}>Google</Button>
            <Button variant="outline" type="button" className="w-full" disabled={isSubmitting}>Discord</Button>
          </div>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/subscribe" className="text-primary font-bold hover:underline">
            Start your free trial
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;