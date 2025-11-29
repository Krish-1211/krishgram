"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    image: string;
    credentialUrl: string;
}

interface CertificateModalProps {
    certificate: Certificate | null;
    isOpen: boolean;
    onClose: () => void;
}

export function CertificateModal({ certificate, isOpen, onClose }: CertificateModalProps) {
    if (!certificate) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-background w-full max-w-md rounded-2xl shadow-xl pointer-events-auto overflow-hidden">
                            <div className="relative aspect-[4/3] w-full bg-muted">
                                <Image
                                    src={certificate.image}
                                    alt={certificate.title}
                                    fill
                                    className="object-cover"
                                />
                                <button
                                    onClick={onClose}
                                    className="absolute right-2 top-2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="p-4 space-y-3">
                                <div>
                                    <h3 className="font-bold text-lg">{certificate.title}</h3>
                                    <p className="text-sm text-muted-foreground">{certificate.issuer} • {certificate.date}</p>
                                </div>
                                <a
                                    href={certificate.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                                >
                                    View Credential <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
