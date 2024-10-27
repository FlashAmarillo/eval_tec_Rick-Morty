/* Declaración de tipos para los iconos */

interface User {
  name: string;
  email: string;
  password: string;
}

interface LoggedInUser {
  name: string;
  email: string;
}

type NameAndUrl = {
  name: string;
  url: string;
}

interface Character {
  id: number
  name: string
  status: string | "Alive" | "Dead" | "Unknown"
  species: string | "Human" | "Alien" | "Humanoid" | "Unknown" | "Poopybutthole" | "Mythological Creature" | "Animal" | "Robot" | "Cronenberg" | "Disease"
  type: string
  gender: string
  origin: NameAndUrl
  location: NameAndUrl
  image: string
  episode: string[]
  url: string
  created: string
}

interface Request {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

interface PropCharacter {
  character: Character
}

interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

interface RequestEpisode {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Episode[]
}

interface PropEpisode {
  episode: Episode
}



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
    export const Settings2: React.ComponentType<IconProps>;
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
    export const PanelLeft: React.ComponentType<IconProps>;
    export const Receipt: React.ComponentType<IconProps>;
    export const UserCog: React.ComponentType<IconProps>;
    export const CreditCard: React.ComponentType<IconProps>;
    export const CalendarIcon: React.ComponentType<IconProps>;
    export const PlayCircleIcon: React.ComponentType<IconProps>;
    export const UsersIcon: React.ComponentType<IconProps>;
    export const ClockIcon: React.ComponentType<IconProps>;
    export const InfoIcon: React.ComponentType<IconProps>;
    export const Users: React.ComponentType<IconProps>;
    export const Star: React.ComponentType<IconProps>;
    export const Tv: React.ComponentType<IconProps>;
    export const Globe: React.ComponentType<IconProps>;
    export const Video: React.ComponentType<IconProps>;
    export const ChevronLeft: React.ComponentType<IconProps>;

}

/* 
ArrowUpDown, ChevronDown, MoreHorizontal
Trash2, Pencil
*/