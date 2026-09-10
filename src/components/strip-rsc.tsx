"use client"
import { useEffect } from "react"

export function StripRsc() {
  useEffect(() => {
    if (location.search.includes("_rsc")) {
      const url = new URL(location.href)
      url.searchParams.delete("_rsc")
      const clean = url.pathname + (url.search ? url.search : "") + url.hash
      history.replaceState(null, "", clean || "/")
    }
  }, [])
  return null
}
