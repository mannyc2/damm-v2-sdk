export function getDefaultRpcSubscriptionsUrl(rpcUrl: string): string {
  const parsedUrl = new URL(rpcUrl);
  parsedUrl.protocol = parsedUrl.protocol === "https:" ? "wss:" : "ws:";
  return parsedUrl.toString();
}
