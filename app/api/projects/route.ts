import { NextRequest, NextResponse } from 'next/server'
import { getUserProjects, createProject, getUserByEmail } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const email = request.headers.get('x-user-email')
  if (!email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = getUserByEmail(email)
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 401 })
  }

  const projects = getUserProjects(user.id)
  return NextResponse.json({ projects })
}

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json()
    const email = request.headers.get('x-user-email')
    
    if (!email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = getUserByEmail(email)
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Project name required' }, { status: 400 })
    }

    const projectName = name.trim()
    if (!projectName) {
      return NextResponse.json({ error: 'Project name required' }, { status: 400 })
    }

    const project = createProject(user.id, projectName)
    return NextResponse.json({ project }, { status: 201 })
  } catch (error) {
    console.error('Create project error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
