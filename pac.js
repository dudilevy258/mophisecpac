function FindProxyForURL(url, host) 
{
  if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0"))
    return "PROXY 20.0.11.239:808";
  else 
    return "PROXY 20.0.11.239:808";
}