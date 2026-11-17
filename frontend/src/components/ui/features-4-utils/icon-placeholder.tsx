import {
  AudioLines,
  Award,
  BarChart3,
  Braces,
  Brain,
  Camera,
  Eye,
  FileDown,
  FileSearch,
  FileText,
  Gauge,
  ListChecks,
  ScanSearch,
  Sparkles,
  Target,
  Video,
  type LucideIcon,
} from "lucide-react"

/**
 * This project uses lucide-react only. Add an icon here (import + map entry)
 * to make it available as <IconPlaceholder lucide="..." />.
 */
const LUCIDE_ICONS = {
  AudioLines,
  Award,
  BarChart3,
  Braces,
  Brain,
  Camera,
  Eye,
  FileDown,
  FileSearch,
  FileText,
  Gauge,
  ListChecks,
  ScanSearch,
  Sparkles,
  Target,
  Video,
} satisfies Record<string, LucideIcon>

export type LucideIconName = keyof typeof LUCIDE_ICONS

type IconPlaceholderProps = Omit<React.ComponentProps<LucideIcon>, "ref"> & {
  /** lucide-react icon name */
  lucide: LucideIconName
  /** Accepted (and ignored) so the same call site can target other icon sets. */
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

export function IconPlaceholder({
  lucide,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tabler, hugeicons, phosphor, remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = LUCIDE_ICONS[lucide]
  return <Icon aria-hidden="true" {...props} />
}

