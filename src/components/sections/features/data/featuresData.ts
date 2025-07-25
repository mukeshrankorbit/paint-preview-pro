import { 
  Eye, 
  Wand2, 
  FileText, 
  Save, 
  Link, 
  Clock,
  Smartphone,
  Shield,
  Palette,
  Share2,
  BarChart3,
  Settings
} from 'lucide-react';

export const featureCategories = [
  {
    title: 'Visualization Tools',
    description: 'Powerful tools to bring color visions to life',
    features: [
      {
        icon: Eye,
        title: 'Real-Time Preview',
        description: 'See paint colors applied instantly with photorealistic accuracy. Our AI technology ensures colors look exactly as they will in real life.'
      },
      {
        icon: Palette,
        title: 'Advanced Color Picker',
        description: 'Access thousands of paint colors from major brands. Upload custom colors or use our color matching technology.'
      },
      {
        icon: Smartphone,
        title: 'Mobile Optimization',
        description: 'Work seamlessly on any device. Take photos on-site and preview colors instantly, even offline.'
      }
    ]
  },
  {
    title: 'AI-Powered Tools',
    description: 'Smart technology that saves time and improves results',
    features: [
      {
        icon: Wand2,
        title: 'AI Color Suggestions',
        description: 'Get intelligent color recommendations based on room lighting, architectural style, and current design trends.'
      },
      {
        icon: Settings,
        title: 'Smart Auto-Detection',
        description: 'Automatically detect walls, trim, and other paintable surfaces. Our AI understands room layouts and surfaces.'
      },
      {
        icon: BarChart3,
        title: 'Usage Analytics',
        description: 'Track which colors perform best with clients and optimize your color presentation strategy.'
      }
    ]
  },
  {
    title: 'Professional Features',
    description: 'Tools designed for serious painting contractors',
    features: [
      {
        icon: FileText,
        title: 'Professional PDF Exports',
        description: 'Generate branded proposals with before/after comparisons, color details, and pricing information.'
      },
      {
        icon: Share2,
        title: 'Client Collaboration',
        description: 'Send secure sharing links to clients. They can view options, leave feedback, and approve selections remotely.'
      },
      {
        icon: Save,
        title: 'Project Management',
        description: 'Organize all your color experiments and client projects in one place. Never lose track of a project again.'
      }
    ]
  },
  {
    title: 'Business Tools',
    description: 'Features that help grow your painting business',
    features: [
      {
        icon: Clock,
        title: 'Lightning Fast Processing',
        description: 'Process and preview colors in seconds. Keep your workflow moving and impress clients with instant results.'
      },
      {
        icon: Link,
        title: 'White-Label Branding',
        description: 'Customize the platform with your logo and colors. Present a professional, branded experience to clients.'
      },
      {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Bank-level encryption keeps client photos secure. GDPR compliant with automatic backups.'
      }
    ]
  }
]; 