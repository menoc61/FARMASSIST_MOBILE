import {
  Info,
  LucideIcon,
  MoonStar,
  Sun,
  CircleUserRound,
  LayoutGrid,
  ClipboardList,
  Sprout,
  UserRoundCog,
  ScanSearch,
  Calendar,
  X,
  Check,
  ChevronUp,
  ChevronDown,
  EyeOff,
  Eye,
} from "lucide-react-native";
import { cssInterop } from "nativewind";

function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}
interopIcon(Info);
interopIcon(MoonStar);
interopIcon(Sun);
interopIcon(LayoutGrid);
interopIcon(UserRoundCog);
interopIcon(Sprout);
interopIcon(ClipboardList);
interopIcon(CircleUserRound);
interopIcon(ScanSearch);
interopIcon(Calendar);
interopIcon(X);
interopIcon(Check);
interopIcon(ChevronUp);
interopIcon(ChevronDown);
interopIcon(EyeOff);
interopIcon(Eye);

export {
  Info,
  MoonStar,
  Sun,
  CircleUserRound,
  LayoutGrid,
  ClipboardList,
  Sprout,
  UserRoundCog,
  ScanSearch,
  X,
  Calendar,
  Check,
  ChevronUp,
  ChevronDown,
  EyeOff,
  Eye,
};
