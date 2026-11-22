import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { RiBookOpenLine, RiCodeLine, RiPulseLine } from "@remixicon/react"

const resources = [
  {
    title: "Components",
    description: "63 primitives with shared tokens.",
    icon: RiCodeLine,
  },
  {
    title: "Guides",
    description: "Patterns for forms, tables, and charts.",
    icon: RiBookOpenLine,
  },
  {
    title: "Changelog",
    description: "What shipped this week.",
    icon: RiPulseLine,
  },
]

export function NavigationMenuCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium">Navigation Menu</span>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[320px] gap-1 p-1">
                    {resources.map((item) => (
                      <NavigationMenuLink key={item.title} href="#">
                        <item.icon />
                        <div className="flex flex-col">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[260px] flex-col gap-2 p-2">
                    <div className="flex items-center justify-between gap-2 rounded-md p-2">
                      <span className="text-sm">Starter</span>
                      <Badge variant="outline">$0</Badge>
                    </div>
                    <div className="flex items-center justify-between gap-2 rounded-md p-2">
                      <span className="text-sm">Team</span>
                      <Badge>$24 / mo</Badge>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Docs</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </CardContent>
    </Card>
  )
}
