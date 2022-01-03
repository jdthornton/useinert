import {useEffect} from 'react';

export default function useInert(
  querySelectorString: string | null
) {
  useEffect(() => {
    if(querySelectorString !== null){
      (document?.activeElement as HTMLElement)?.blur();
      const appEl = document?.querySelector(querySelectorString)
      appEl?.setAttribute("inert", "true");
      return () => appEl?.removeAttribute("inert")
    }
  },[querySelectorString])
}
