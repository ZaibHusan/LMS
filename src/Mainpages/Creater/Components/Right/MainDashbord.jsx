import React from 'react'
import './Right.css'
import { assets } from '../../../../assets/assets'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

export default function MainDashbord() {

  const performanceData = [
    { month: 'Jan', earnings: 400, students: 50 },
    { month: 'Feb', earnings: 600, students: 80 },
    { month: 'Mar', earnings: 800, students: 100 },
    { month: 'Apr', earnings: 1200, students: 140 },
    { month: 'May', earnings: 1600, students: 200 },
  ]

  return (
    <div className='Right'>
      <div className="Right_part1">
        {/* Trainer Info */}
        <div className="trainer_info">
          <div className="trainer_name">
            <div className="profile">
              <img src={assets.profile_img} alt="Trainer" />
            </div>
            <h1>Trainer Name</h1>
          </div>

          <div className="trainer_stats">
            <h2>Total Earnings: $5000</h2>
            <p>Number of Courses: 10</p>
            <p>Total Students: 200</p>
            <p>Ratings: 4.5 ★</p>
          </div>
        </div>
      </div>

      {/* 🔹 Analytics Section */}
      <div className="graphic_visualization_section">
        <div className="chart_box">
          <h2>Performance Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="earnings" stroke="#007bff" strokeWidth={2} name="Earnings ($)" />
              <Line type="monotone" dataKey="students" stroke="#28a745" strokeWidth={2} name="Students" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
