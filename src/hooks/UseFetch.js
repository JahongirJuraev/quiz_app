import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; // если URL пустой, ничего не делаем

    const fetchData = async () => {
      setIsPending(true);
      setError(null);

      try {
        const res = await fetch(url, {
          headers: { "Accept": "application/json" },
        });

        if (!res.ok) {
          throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
        }

        // Проверяем, действительно ли JSON
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Сервер не вернул JSON, а: " + contentType);
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
}


// import { useEffect, useState } from "react";

// export const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(url, {
//           headers: {
//             "Content-Type": "application/json",
//             "X-Jsio-Token": "b0e0034fd5f8654c6a85d7ec0a49a4b3", // 🔑 твой токен
//           },
//         });

//         if (!res.ok) {
//           throw new Error(`Ошибка загрузки данных (${res.status})`);
//         }

//         const json = await res.json();

//         // Поскольку твой JSON имеет структуру { "quizzes": [ ... ] }
//         setData(json.quizzes);
//         setIsPending(false);
//       } catch (err) {
//         setError(err.message);
//         setIsPending(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, isPending, error };
// };
