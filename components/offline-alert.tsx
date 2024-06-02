"use client";

import useNetworkStatus from "@/hooks/use-network-status";

export function OfflineAlert() {
  const { isOnline } = useNetworkStatus();
  if (!isOnline) {
    return (
      <div className="flex justify-center items-center bg-red-800 text-red-200 p-1 text-xs">
        أنت غير متصل بالإنترنت. يرجى تفقد إتصالك بشبكة الإنترنت
      </div>
    );
  }
}
