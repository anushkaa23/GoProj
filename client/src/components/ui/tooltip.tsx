import { Tooltip } from "@chakra-ui/react";

export function AppTooltip({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <Tooltip label={label} hasArrow>
      {children}
    </Tooltip>
  );
}
