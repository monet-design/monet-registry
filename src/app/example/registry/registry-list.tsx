"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { ComponentMetadata } from "./page";

type SortOrder = "newest" | "oldest" | "name";

const ITEMS_PER_PAGE = 30;

interface ComponentWithMetadata {
  name: string;
  metadata: ComponentMetadata;
}

interface RegistryListProps {
  components: ComponentWithMetadata[];
  availableDates: string[];
}

export function RegistryList({
  components,
  availableDates,
}: RegistryListProps) {
  const [selectedDate, setSelectedDate] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredAndSortedComponents = useMemo(() => {
    let filtered = components;

    // Filter by date
    if (selectedDate !== "all") {
      filtered = components.filter(
        (c) => c.metadata.createdAt === selectedDate
      );
    }

    // Sort
    return [...filtered].sort((a, b) => {
      if (sortOrder === "name") {
        return a.name.localeCompare(b.name);
      }

      const dateA = a.metadata.createdAt
        ? new Date(a.metadata.createdAt).getTime()
        : 0;
      const dateB = b.metadata.createdAt
        ? new Date(b.metadata.createdAt).getTime()
        : 0;

      if (sortOrder === "newest") {
        return dateB - dateA;
      }
      return dateA - dateB;
    });
  }, [components, selectedDate, sortOrder]);

  // Reset to page 1 when filters or sort order change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDate, sortOrder]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredAndSortedComponents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedComponents = filteredAndSortedComponents.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Component Registry</h1>
        <span className="text-gray-500 text-sm">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedComponents.length)} of {filteredAndSortedComponents.length}
          {filteredAndSortedComponents.length !== components.length && ` (${components.length} total)`}
        </span>
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex flex-wrap gap-4 mb-8 p-4 bg-white rounded-lg border">
        {/* Date Filter */}
        <div className="flex items-center gap-2">
          <label htmlFor="date-filter" className="text-sm font-medium text-gray-700">
            Date:
          </label>
          <select
            id="date-filter"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-1.5 text-sm border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All dates</option>
            {availableDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Order */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort-order" className="text-sm font-medium text-gray-700">
            Sort:
          </label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            className="px-3 py-1.5 text-sm border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>

        {/* Reset Button */}
        {(selectedDate !== "all" || sortOrder !== "newest") && (
          <button
            onClick={() => {
              setSelectedDate("all");
              setSortOrder("newest");
            }}
            className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 underline"
          >
            Reset
          </button>
        )}
      </div>

      {/* Component List */}
      <div className="flex flex-col gap-12">
        {paginatedComponents.map(({ name: componentName, metadata }) => (
          <ComponentCard
            key={componentName}
            name={componentName}
            metadata={metadata}
          />
        ))}
        {filteredAndSortedComponents.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No components found matching the filter.
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const showPage =
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1);

              const showEllipsis =
                (page === currentPage - 2 && currentPage > 3) ||
                (page === currentPage + 2 && currentPage < totalPages - 2);

              if (showEllipsis) {
                return (
                  <span key={page} className="px-2 text-gray-400">
                    ...
                  </span>
                );
              }

              if (!showPage) return null;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`min-w-[40px] px-3 py-2 text-sm font-medium rounded-md ${
                    page === currentPage
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

function ComponentCard({
  name,
  metadata,
}: {
  name: string;
  metadata: ComponentMetadata;
}) {
  const Component = useMemo(
    () =>
      dynamic(
        () =>
          import(`@/components/registry/${name}/index`).catch(() => {
            return () => <div>Failed to load component</div>;
          }),
        { ssr: false }
      ),
    [name]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">{name}</h2>
          {metadata.createdAt && (
            <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
              {metadata.createdAt}
            </span>
          )}
          {metadata.category && (
            <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded">
              {metadata.category}
            </span>
          )}
        </div>
        <Link
          href={`/example/registry?name=${name}`}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          View full &rarr;
        </Link>
      </div>
      <div className="border rounded-lg bg-white p-4 overflow-auto">
        <Component />
      </div>
    </div>
  );
}
