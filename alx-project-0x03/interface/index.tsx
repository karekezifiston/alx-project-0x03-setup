// Button Component Props
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// Layout Component Props
export interface LayoutProps {
  children: React.ReactNode;
}

// Page Route Props
export interface PageRouteProps {
  pageRoute: string;
}