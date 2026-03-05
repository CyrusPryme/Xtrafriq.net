import bcrypt from 'bcryptjs'

export interface User {
  id: string
  name: string
  email: string
  password: string
  role: 'user' | 'admin'
  createdAt: string
}

export interface Project {
  id: string
  userId: string
  name: string
  status: 'Not Started' | 'In Progress' | 'Review' | 'Completed'
  progress: number
  lastUpdated: string
}

// In-memory storage (in production, use a database)
let users: User[] = []
let projects: Project[] = []

// Seed admin user
async function seedAdmin() {
  const adminExists = users.find(u => u.email === 'admin@xtrafriq.com')
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('admin123', 10)
    users.push({
      id: '1',
      name: 'Admin User',
      email: 'admin@xtrafriq.com',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date().toISOString()
    })
  }
}

seedAdmin()

export async function createUser(name: string, email: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10)
  const user: User = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
    role: 'user',
    createdAt: new Date().toISOString()
  }
  users.push(user)
  return user
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const user = users.find(u => u.email === email)
  if (!user) return null
  
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return null
  
  return user
}

export function getUserById(id: string): User | null {
  return users.find(u => u.id === id) || null
}

export function getUserByEmail(email: string): User | null {
  return users.find(u => u.email === email) || null
}

export function isAdmin(email: string): boolean {
  const user = getUserByEmail(email)
  return user?.role === 'admin'
}

export function getAllUsers(): User[] {
  return users.map(u => ({ ...u, password: '' }))
}

export function createProject(userId: string, name: string): Project {
  const project: Project = {
    id: Date.now().toString(),
    userId,
    name,
    status: 'Not Started',
    progress: 0,
    lastUpdated: new Date().toISOString()
  }
  projects.push(project)
  return project
}

export function getUserProjects(userId: string): Project[] {
  return projects.filter(p => p.userId === userId)
}

export function getAllProjects(): Project[] {
  return projects
}

export function updateProject(projectId: string, updates: Partial<Project>): Project | null {
  const projectIndex = projects.findIndex(p => p.id === projectId)
  if (projectIndex === -1) return null
  
  projects[projectIndex] = { ...projects[projectIndex], ...updates, lastUpdated: new Date().toISOString() }
  return projects[projectIndex]
}
