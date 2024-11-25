import React from 'react';

export function Table({ children, className, ...props }) {
  return (
    <table className={`min-w-full divide-y divide-gray-200 ${className}`} {...props}>
      {children}
    </table>
  );
}

export function TableHeader({ children, ...props }) {
  return <thead {...props}>{children}</thead>;
}

export function TableBody({ children, ...props }) {
  return <tbody className="bg-white divide-y divide-gray-200" {...props}>{children}</tbody>;
}

export function TableRow({ children, ...props }) {
  return <tr {...props}>{children}</tr>;
}

export function TableHead({ children, ...props }) {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({ children, ...props }) {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" {...props}>
      {children}
    </td>
  );
}

