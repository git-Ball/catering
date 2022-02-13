export async function getData() {
  const host = "https://likedsneeze.backendless.app/api/data/events";

  try {
    const res = await fetch(host);
    if (res.ok == false) {
      const error = res.json();
      throw new Error(error);
    }
    const result = await res.json();
    return result;
  } catch (err) {
   alert(err)
  }
}
