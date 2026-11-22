"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationCard() {
  const [page, setPage] = React.useState(2)

  const go = (next: number) => (event: React.MouseEvent) => {
    event.preventDefault()
    setPage(Math.min(5, Math.max(1, next)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pagination</CardTitle>
        <CardDescription>Page 3 of 5 · 48 transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                text="Prev"
                onClick={go(page - 1)}
                aria-disabled={page === 1}
              />
            </PaginationItem>
            {[1, 2, 3].map((n) => (
              <PaginationItem key={n}>
                <PaginationLink
                  href="#"
                  isActive={page === n}
                  onClick={go(n)}
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" onClick={go(5)} isActive={page === 5}>
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                text="Next"
                onClick={go(page + 1)}
                aria-disabled={page === 5}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  )
}
