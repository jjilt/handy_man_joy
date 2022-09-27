import { useState } from 'react';
import WorkerForm from './WorkerForm';
import { Link } from 'react-router-dom';

const WorkerShow = ({ id, title, specialty, updateWorker, deleteWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <WorkerForm 
            updateWorker={updateWorker}
            id={id}
            title={title}
            specialty={specialty}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <div>
          <h1> {title} {specialty}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteWorker(id)}>
            Delete
          </button>
          <Link
            to={`/${id}/services`}
            state={{ Title: title }}
          >
            <button>Services</button>
          </Link>
        </div>
      }
      <hr />
    </>
  )
}

export default WorkerShow;