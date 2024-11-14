import ApartmentList from './components/ApartmentList';
import ApartmentForm from './components/ApartmentForm';

function App() {
  return (
    <>
      <div>
        <div className="head">
          <h1 className="main-title">Gestión de Apartamentos</h1>
        </div>
        <div className="body">
          <ApartmentForm />
          <ApartmentList />
        </div>
      </div>
    </>
  )
}

export default App