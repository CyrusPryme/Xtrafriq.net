import { NextRequest, NextResponse } from 'next/server'
import { getAllUsers, getAllProjects, updateProject, isAdmin } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const email = request.headers.get('x-user-email')
  if (!email || !isAdmin(email)) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const users = getAllUsers()
  const projects = getAllProjects()
  
  // Combine projects with user data
  const projectsWithUsers = projects.map(project => {
    const user = users.find(u => u.id === project.userId)
    return {
      ...project,
      userName: user?.name || 'Unknown',
      userEmail: user?.email || 'Unknown'
    }
  })

  return NextResponse.json({ 
    users, 
    projects: projectsWithUsers 
  })
}

export async function PUT(request: NextRequest) {
  const email = request.headers.get('x-user-email')
  if (!email || !isAdmin(email)) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  try {
    const { projectId, status, progress } = await request.json()
    
    if (!projectId) {
      return NextResponse.json({ error: 'Project ID required' }, { status: 400 })
    }

    const updates: any = {}
    if (status) updates.status = status
    if (typeof progress === 'number') updates.progress = progress

    const updatedProject = updateProject(projectId, updates)
    
    if (!updatedProject) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    return NextResponse.json({ project: updatedProject })
  } catch (error) {
    console.error('Update project error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
