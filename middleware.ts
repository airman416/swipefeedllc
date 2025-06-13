import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Allow access to the .well-known directory
  if (request.nextUrl.pathname.startsWith('/.well-known')) {
    return NextResponse.next()
  }
} 