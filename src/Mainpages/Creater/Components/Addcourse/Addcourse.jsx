import React, { useState } from 'react';
import './Addcourse.css';

export default function Addcourse() {
  const [formData, setFormData] = useState({
    courseName: '',
    coursePrice: '',
    courseDuration: '',
    courseUnits: [],
    courseDescription: '',
    courseImage: null,
  });

  // === Handle main course info ===
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? checked :
        type === 'file' ? files[0] :
        value,
    }));
  };

  // === Handle unit title changes ===
  const handleUnitChange = (e, unitIndex) => {
    const { name, value } = e.target;
    const updatedUnits = [...formData.courseUnits];
    updatedUnits[unitIndex][name] = value;
    setFormData((prev) => ({ ...prev, courseUnits: updatedUnits }));
  };

  // === Handle lecture field changes ===
  const handleLectureChange = (e, unitIndex, lectureIndex) => {
    const { name, value, type, checked } = e.target;
    const updatedUnits = [...formData.courseUnits];
    updatedUnits[unitIndex].lectures[lectureIndex][name] =
      type === 'checkbox' ? checked : value;
    setFormData((prev) => ({ ...prev, courseUnits: updatedUnits }));
  };

  // === Add & Remove Units ===
  const addUnit = () => {
    setFormData((prev) => ({
      ...prev,
      courseUnits: [
        ...prev.courseUnits,
        { unitTitle: '', lectures: [] },
      ],
    }));
  };

  const removeUnit = (unitIndex) => {
    const updatedUnits = formData.courseUnits.filter((_, i) => i !== unitIndex);
    setFormData((prev) => ({ ...prev, courseUnits: updatedUnits }));
  };

  // === Add & Remove Lectures ===
  const addLecture = (unitIndex) => {
    const updatedUnits = [...formData.courseUnits];
    updatedUnits[unitIndex].lectures.push({
      lectureTitle: '',
      lectureDuration: '',
      isFree: false,
    });
    setFormData((prev) => ({ ...prev, courseUnits: updatedUnits }));
  };

  const removeLecture = (unitIndex, lectureIndex) => {
    const updatedUnits = [...formData.courseUnits];
    updatedUnits[unitIndex].lectures = updatedUnits[unitIndex].lectures.filter(
      (_, i) => i !== lectureIndex
    );
    setFormData((prev) => ({ ...prev, courseUnits: updatedUnits }));
  };

  // === Submit ===
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('📦 Submitted Data:', formData);
  };

  return (
    <div className="Addcourse">
      <h1>Add New Course</h1>

      <form className="addcourse-form" onSubmit={handleSubmit}>
        {/* === Course Info === */}
        <label>Course Name:</label>
        <input
          type="text"
          name="courseName"
          placeholder="Enter course name"
          value={formData.courseName}
          onChange={handleInputChange}
        />

        <label>Price:</label>
        <input
          type="text"
          name="coursePrice"
          placeholder="Enter course price"
          value={formData.coursePrice}
          onChange={handleInputChange}
        />

        <label>Duration:</label>
        <input
          type="text"
          name="courseDuration"
          placeholder="Enter course duration"
          value={formData.courseDuration}
          onChange={handleInputChange}
        />

        {/* === Course Units === */}
        <div className="Course_structure">
          <h2>Course Units</h2>
          <button type="button" onClick={addUnit}>➕ Add Unit</button>

          {formData.courseUnits.map((unit, uIndex) => (
            <div key={uIndex} className="Add_unit">
              <h3>Unit {uIndex + 1}</h3>

              <label>Unit Title:</label>
              <input
                type="text"
                name="unitTitle"
                placeholder="Enter unit title"
                value={unit.unitTitle}
                onChange={(e) => handleUnitChange(e, uIndex)}
              />

              <button
                type="button"
                onClick={() => addLecture(uIndex)}
              >
                ➕ Add Lecture
              </button>
              <button
                type="button"
                onClick={() => removeUnit(uIndex)}
              >
                ❌ Remove Unit
              </button>

              {/* === Lectures === */}
              {unit.lectures.map((lec, lIndex) => (
                <div key={lIndex} className="Unit_lectures">
                  <h4>Lecture {lIndex + 1}</h4>

                  <label>Lecture Title:</label>
                  <input
                    type="text"
                    name="lectureTitle"
                    placeholder="Enter lecture title"
                    value={lec.lectureTitle}
                    onChange={(e) =>
                      handleLectureChange(e, uIndex, lIndex)
                    }
                  />

                  <label>Lecture Duration (minutes):</label>
                  <input
                    type="text"
                    name="lectureDuration"
                    placeholder="Enter lecture duration"
                    value={lec.lectureDuration}
                    onChange={(e) =>
                      handleLectureChange(e, uIndex, lIndex)
                    }
                  />

                  <label>Is Free:</label>
                  <input
                    type="checkbox"
                    name="isFree"
                    checked={lec.isFree}
                    onChange={(e) =>
                      handleLectureChange(e, uIndex, lIndex)
                    }
                  />

                  <button
                    type="button"
                    onClick={() => removeLecture(uIndex, lIndex)}
                  >
                    🗑️ Remove Lecture
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* === Description === */}
        <div className="Description_course">
          <label>Course Description:</label>
          <textarea
            name="courseDescription"
            placeholder="Enter course description"
            value={formData.courseDescription}
            onChange={handleInputChange}
          />
        </div>

        {/* === Image === */}
        <label>Course Thumbnail:</label>
        <input
          type="file"
          name="courseImage"
          onChange={handleInputChange}
        />

        <button className="addcourse-button" type="submit">
          ✅ Add Course
        </button>
      </form>
    </div>
  );
}
