import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  IconPlaceholder,
  type LucideIconName,
} from "@/components/ui/features-4-utils/icon-placeholder";

type Feature = {
  icon: LucideIconName;
  title: string;
  description: string;
};

type FeatureTab = {
  value: string;
  label: string;
  features: Feature[];
};

const TABS: FeatureTab[] = [
  {
    value: "preparation",
    label: "Preparation",
    features: [
      {
        icon: "FileSearch",
        title: "Resume analysis",
        description:
          "Upload your resume and extract technical skills automatically.",
      },
      {
        icon: "Target",
        title: "Skill-gap detection",
        description:
          "Compare your skills against the job description to see what's missing.",
      },
      {
        icon: "Brain",
        title: "AI question generation",
        description:
          "Get a personalized question set based on your role and skill gaps.",
      },
    ],
  },
  {
    value: "interview",
    label: "Interview",
    features: [
      {
        icon: "Video",
        title: "Live mock interview",
        description:
          "Answer on camera in a fully automated, AI-powered interview flow.",
      },
      {
        icon: "AudioLines",
        title: "Speech analysis",
        description:
          "Whisper transcription with filler-word, pace, and fluency scoring.",
      },
      {
        icon: "Eye",
        title: "Behavior analysis",
        description:
          "Track eye contact, posture, and head stability frame by frame.",
      },
    ],
  },
  {
    value: "insights",
    label: "Insights",
    features: [
      {
        icon: "Award",
        title: "Readiness score",
        description:
          "An XGBoost model fuses every signal into one interview-readiness score.",
      },
      {
        icon: "BarChart3",
        title: "Analytics dashboard",
        description:
          "Visualize correctness, fluency, and body-language scores per question.",
      },
      {
        icon: "FileDown",
        title: "PDF report",
        description:
          "Download a shareable report with scores, transcripts, and feedback.",
      },
    ],
  },
];

export default function FeaturesBlock() {
  return (
    <section className="flex w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="gap-1.5">
            <IconPlaceholder lucide="Sparkles" className="size-3.5" />
            Built for candidates
          </Badge>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Everything you need to ace your interview
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
            Interview AI combines resume analysis, live mock interviews, and
            machine-learning scoring in one connected platform.
          </p>
        </div>

        <Tabs defaultValue="preparation" className="mt-10 w-full items-center">
          <TabsList className="mx-auto flex h-auto w-fit flex-wrap gap-1 rounded-lg p-1">
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-md px-4 py-1.5 text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {tab.features.map((feature) => (
                  <Card
                    key={feature.title}
                    className="group flex h-full flex-col gap-4 p-6 transition-colors hover:border-primary/40"
                  >
                    <div
                      className={cn(
                        "flex size-11 items-center justify-center rounded-md",
                        "bg-primary/10 text-primary transition-colors",
                        "group-hover:bg-primary group-hover:text-primary-foreground",
                      )}
                    >
                      <IconPlaceholder lucide={feature.icon} className="size-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-heading text-base font-medium">
                        {feature.title}
                      </h3>
                      <p className="text-sm/relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <IconPlaceholder lucide="Braces" className="size-3.5" />
                      Powered by ML
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
