import React, { useState } from 'react';
import './Addcourse.css';

export default function Addcourse() {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    author: '',
    rating: 4.8,
    stars: 5,
    reviews: 0,
    price: '',
    discount: 0,
    discount_days: 0,
    courseStructure: [],
  });

  // === Handle main info ===
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // === Add Units ===
  const addUnit = () => {
    setFormData((prev) => ({
      ...prev,
      courseStructure: [
        ...prev.courseStructure,
        { sectionTitle: '', lectures: [] },
      ],
    }));
  };

  // === Remove Unit ===
  const removeUnit = (index) => {
    const updatedUnits = formData.courseStructure.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, courseStructure: updatedUnits }));
  };

  // === Handle Unit Change ===
  const handleUnitChange = (e, uIndex) => {
    const updated = [...formData.courseStructure];
    updated[uIndex].sectionTitle = e.target.value;
    setFormData((prev) => ({ ...prev, courseStructure: updated }));
  };

  // === Add Lecture ===
  const addLecture = (uIndex) => {
    const updated = [...formData.courseStructure];
    updated[uIndex].lectures.push({
      lectureTitle: '',
      duration_minutes: '',
      isFree: false,
      videoUrl: '',
    });
    setFormData((prev) => ({ ...prev, courseStructure: updated }));
  };

  // === Remove Lecture ===
  const removeLecture = (uIndex, lIndex) => {
    const updated = [...formData.courseStructure];
    updated[uIndex].lectures = updated[uIndex].lectures.filter((_, i) => i !== lIndex);
    setFormData((prev) => ({ ...prev, courseStructure: updated }));
  };

  // === Handle Lecture Change ===
  const handleLectureChange = (e, uIndex, lIndex) => {
    const { name, value, type, checked } = e.target;
    const updated = [...formData.courseStructure];
    updated[uIndex].lectures[lIndex][name] = type === 'checkbox' ? checked : value;
    setFormData((prev) => ({ ...prev, courseStructure: updated }));
  };

  // === Submit ===
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct schema-based object
    const courseData = {
      title: formData.title,
      description: {
        Title: formData.title,
        features: {
          dec: formData.description,
          points: [
            "Component-based architecture",
            "Virtual DOM",
            "State management",
            "Event handling",
            "Lifecycle methods",
          ],
        },
      },
      image: formData.image,
      author: formData.author,
      rating: parseFloat(formData.rating) || 4.8,
      stars: parseInt(formData.stars) || 5,
      reviews: parseInt(formData.reviews) || 0,
      price: parseFloat(formData.price),
      discount: parseInt(formData.discount) || 0,
      discount_days: parseInt(formData.discount_days) || 0,
      courseStructure: formData.courseStructure,
    };

    try {
      const response = await fetch('http://localhost:3000/getin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      });

      const result = await response.json();
      console.log(result);
      alert('✅ Course added successfully!');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className="Addcourse">
      <h1>Add New Course</h1>

      <form className="addcourse-form" onSubmit={handleSubmit}>
        <label>Course Title:</label>
        <input type="text" name="title" onChange={handleInputChange} />

        <label>Author:</label>
        <input type="text" name="author" onChange={handleInputChange} />

        <label>Price:</label>
        <input type="number" name="price" onChange={handleInputChange} />

        <label>Discount (%):</label>
        <input type="number" name="discount" onChange={handleInputChange} />

        <label>Discount Days:</label>
        <input type="number" name="discount_days" onChange={handleInputChange} />

        <label>Description:</label>
        <textarea name="description" onChange={handleInputChange} />

        <label>Course Image URL:</label>
        <input type="text" name="image" onChange={handleInputChange} />

        {/* === Course Units === */}
        <div className="Course_structure">
          <h2>Course Units</h2>
          <button type="button" onClick={addUnit}>➕ Add Unit</button>

          {formData.courseStructure.map((unit, uIndex) => (
            <div key={uIndex} className="Add_unit">
              <h3>Unit {uIndex + 1}</h3>

              <input
                type="text"
                placeholder="Section Title"
                value={unit.sectionTitle}
                onChange={(e) => handleUnitChange(e, uIndex)}
              />

              <button type="button" onClick={() => addLecture(uIndex)}>Add Lecture</button>
              <button type="button" onClick={() => removeUnit(uIndex)}>Remove Unit</button>

              {unit.lectures.map((lec, lIndex) => (
                <div key={lIndex} className="Unit_lectures">
                  <h4>Lecture {lIndex + 1}</h4>
                  <input
                    type="text"
                    name="lectureTitle"
                    placeholder="Lecture Title"
                    value={lec.lectureTitle}
                    onChange={(e) => handleLectureChange(e, uIndex, lIndex)}
                  />
                  <input
                    type="text"
                    name="duration_minutes"
                    placeholder="Duration (minutes)"
                    value={lec.duration_minutes}
                    onChange={(e) => handleLectureChange(e, uIndex, lIndex)}
                  />
                  <input
                    type="text"
                    name="videoUrl"
                    placeholder="Video URL"
                    value={lec.videoUrl}
                    onChange={(e) => handleLectureChange(e, uIndex, lIndex)}
                  />
                  <label>
                    Free?
                    <input
                      type="checkbox"
                      name="isFree"
                      checked={lec.isFree}
                      onChange={(e) => handleLectureChange(e, uIndex, lIndex)}
                    />
                  </label>
                  <button type="button" onClick={() => removeLecture(uIndex, lIndex)}>🗑️ Remove Lecture</button>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button className="addcourse-button" type="submit">✅ Add Course</button>
      </form>
    </div>
  );
}
