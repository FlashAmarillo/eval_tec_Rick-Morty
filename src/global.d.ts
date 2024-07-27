/* Declaración de tipos para los iconos */

declare module 'lucide-react' {

    interface IconProps extends React.SVGProps<SVGSVGElement> {
        color?: string;
        size?: number;
        strokeWidth?: number;
        absoluteStrokeWidth?: boolean;
    }

    export const BellIcon: React.ComponentType<IconProps>;
    export const Calculator: React.ComponentType<IconProps>;
    export const Calendar: React.ComponentType<IconProps>;
    export const CreditCard: React.ComponentType<IconProps>;
    export const Settings: React.ComponentType<IconProps>;
    export const Smile: React.ComponentType<IconProps>;
    export const User: React.ComponentType<IconProps>;
    export const LayoutDashboard: React.ComponentType<IconProps>;
    export const UsersRound: React.ComponentType<IconProps>;
    export const Ungroup: React.ComponentType<IconProps>;
    export const Cookie: React.ComponentType<IconProps>;
    export const MessageSquare: React.ComponentType<IconProps>;
    export const LogOut: React.ComponentType<IconProps>;
    export const ArrowUpDown: React.ComponentType<IconProps>;
    export const ChevronDown: React.ComponentType<IconProps>;
    export const MoreHorizontal: React.ComponentType<IconProps>;
    export const Trash2: React.ComponentType<IconProps>;
    export const Pencil: React.ComponentType<IconProps>;
    export const Info: React.ComponentType<IconProps>;
    export const UserRoundPlus: React.ComponentType<IconProps>;
    export const CopyPlus: React.ComponentType<IconProps>;
    export const Check: React.ComponentType<IconProps>;
    export const Search: React.ComponentType<IconProps>;
    export const ChevronRight: React.ComponentType<IconProps>;
    export const Circle: React.ComponentType<IconProps>;
    export const X: React.ComponentType<IconProps>;
    export const ChevronUp: React.ComponentType<IconProps>;
}

/* 
ArrowUpDown, ChevronDown, MoreHorizontal
Trash2, Pencil
*/