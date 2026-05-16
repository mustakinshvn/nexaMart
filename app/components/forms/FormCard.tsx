'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

interface FormCardProps {
    title?: string;
    description?: string;
    children?: ReactNode;
    className?: string;
    footer?: ReactNode;
}

export const FormCard: React.FC<FormCardProps> = ({
    title,
    description,
    children,
    className,
    footer,
}) => {
    return (
        <div
            className={cn(
                'w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm',
                className
            )}
        >
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                {description && (
                    <p className="mt-1 text-sm text-gray-600">{description}</p>
                )}
            </div>

            <div className="space-y-4">{children}</div>

            {footer && <div className="mt-6 border-t border-gray-200 pt-6">{footer}</div>}
        </div>
    );
};