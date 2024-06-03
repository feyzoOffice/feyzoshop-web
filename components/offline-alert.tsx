"use client";

import useNetworkStatus from "@/hooks/use-network-status";

export default function OfflineAlert() {
  const { isOnline } = useNetworkStatus();
  if (!isOnline) {
    return (
      <div className="flex items-center justify-center bg-red-800 p-1 text-xs text-red-200">
        أنت غير متصل بالإنترنت. يرجى تفقد إتصالك بشبكة الإنترنت
      </div>
    );
  }
}
