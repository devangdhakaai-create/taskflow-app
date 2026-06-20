import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import api from '../api/axios'

function DashboardPage() {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await api.get('/tasks/')
                setTasks(response.data)
                setIsLoading(false)
            } catch (err) {
                setIsLoading(false)
            }
        }
        fetchTasks()
    }, [])

    // Derive stats from tasks array — no extra state needed
    const total = tasks.length
    const completed = tasks.filter(t => t.done).length
    const pending = tasks.filter(t => !t.done).length
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

    // Data shape recharts expects
    const chartData = [
        { name: 'Completed', value: completed },
        { name: 'Pending', value: pending },
    ]

    if (isLoading) return <p>Loading dashboard...</p>

    return (
        <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem' }}>
            <h2>Dashboard</h2>

            {/* Stats cards */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{total}</p>
                    <p style={{ margin: 0, color: '#666' }}>Total Tasks</p>
                </div>
                <div style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'green' }}>{completed}</p>
                    <p style={{ margin: 0, color: '#666' }}>Completed</p>
                </div>
                <div style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'orange' }}>{pending}</p>
                    <p style={{ margin: 0, color: '#666' }}>Pending</p>
                </div>
                <div style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'blue' }}>{percentage}%</p>
                    <p style={{ margin: 0, color: '#666' }}>Complete</p>
                </div>
            </div>

            {/* Bar chart */}
            <h3>Task Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="value">
                        <Cell fill="green" />
                        <Cell fill="orange" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DashboardPage