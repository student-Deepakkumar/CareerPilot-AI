import dns from "dns/promises";

try {
  const result = await dns.resolveSrv(
    "_mongodb._tcp.cluster0.x344fv3.mongodb.net",
  );
  console.log(result);
} catch (err) {
  console.error(err);
}
