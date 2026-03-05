'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/components/auth-provider'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Users, FolderOpen, Edit, Save } from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  role: string
  createdAt: string
}

interface Project {
  id: string
  userId: string
  name: string
  status: 'Not Started' | 'In Progress' | 'Review' | 'Completed'
  progress: number
  lastUpdated: string
  userName: string
  userEmail: string
}

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/auth')
      return
    }
    fetchData()
  }, [user, router])

  const fetchData = async () => {
    if (!user?.email) return
    try {
      const response = await fetch('/api/admin', {
        headers: { 'x-user-email': user.email }
      })
      if (response.ok) {
        const data = await response.json()
        setUsers(data.users || [])
        setProjects(data.projects || [])
      }
    } catch (error) {
      console.error('Failed to fetch admin data:', error)
    }
  }

  const updateProjectStatus = async (projectId: string, status: string, progress: number) => {
    if (!user?.email) return
    setIsLoading(true)
    try {
      const response = await fetch('/api/admin', {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'x-user-email': user.email
        },
        body: JSON.stringify({ projectId, status, progress })
      })

      if (response.ok) {
        const updatedProject = await response.json()
        setProjects(projects.map(p => 
          p.id === projectId ? updatedProject.project : p
        ))
        setSelectedProject(null)
      }
    } catch (error) {
      console.error('Failed to update project:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-600'
      case 'In Progress': return 'text-blue-600'
      case 'Review': return 'text-yellow-600'
      default: return 'text-gray-600'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-green-500'
    if (progress >= 50) return 'bg-blue-500'
    if (progress >= 25) return 'bg-yellow-500'
    return 'bg-gray-500'
  }

  if (!user || user.role !== 'admin') {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage users and projects</p>
          </div>
          <Button variant="outline" onClick={logout}>
            Sign Out
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Users Section */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">All Users</h2>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {users.map((user) => (
                <div key={user.id} className="p-3 rounded-lg bg-background/50 border border-border">
                  <div className="font-medium text-foreground">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                  <div className="text-xs text-primary mt-1">{user.role}</div>
                </div>
              ))}
              
              {users.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No users found
                </div>
              )}
            </div>
          </div>

          {/* Projects Section */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <FolderOpen className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">All Projects</h2>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {projects.map((project) => (
                <div key={project.id} className="p-3 rounded-lg bg-background/50 border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-medium text-foreground">{project.name}</div>
                      <div className="text-sm text-muted-foreground">
                        by {project.userName} ({project.userEmail})
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Edit className="w-3 h-3" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Status:</span>
                      <span className={`text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Progress:</span>
                        <span className="text-xs font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {projects.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No projects found
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Edit Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="glass-card rounded-2xl p-6 max-w-md w-full mx-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Edit Project: {selectedProject.name}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Status
                  </label>
                  <select
                    value={selectedProject.status}
                    onChange={(e) => setSelectedProject({
                      ...selectedProject,
                      status: e.target.value as any
                    })}
                    className="w-full p-2 rounded-lg bg-background/50 border border-border"
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">Review</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Progress ({selectedProject.progress}%)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={selectedProject.progress}
                    onChange={(e) => setSelectedProject({
                      ...selectedProject,
                      progress: parseInt(e.target.value)
                    })}
                    className="w-full"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => updateProjectStatus(
                      selectedProject.id,
                      selectedProject.status,
                      selectedProject.progress
                    )}
                    disabled={isLoading}
                    className="flex-1"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
