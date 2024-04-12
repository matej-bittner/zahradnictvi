import { useRouter } from "next/navigation";

export function useSmoothScrollTo(
  anchorId: string,
  url?: undefined | any | null,
) {
  const router = useRouter();

  const scrollToElement = () => {
    const element = document.getElementById(anchorId);
    if (!element) {
      router.push("/");
    } else {
      if (url === undefined) {
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      } else {
        router.push(url);
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    }
  };

  return scrollToElement;
}
