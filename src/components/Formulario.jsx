import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
   const [ nombre, setNombre ] = useState('');
   const [ propietario, setPropietario ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ fecha, setFecha ] = useState('');
   const [ sintomas, setSintomas ] = useState('');

   const [ error, setError] = useState(false);

   const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);

      return random + fecha
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      // Validación del formulario
      if ( [nombre, propietario, email, fecha, sintomas].includes('') ) {
         console.log('Hay campos vacíos');
         setError(true);
         return
      }

      setError(false);
      // Objeto de paciente
      const objetoPaciente = {
         nombre, 
         propietario, 
         email, 
         fecha, 
         sintomas
      }

      if (paciente.id) {
         objetoPaciente.id = paciente.id;

         const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );
         setPacientes(pacientesActualizados);

         setPaciente({})
      } else {
         objetoPaciente.id = generarId();
         setPacientes([...pacientes, objetoPaciente]);
      }

      setNombre('');
      setEmail('');
      setPropietario('');
      setFecha('');
      setSintomas('');
   }

   useEffect(() => {
      if( Object.keys(paciente).length > 0 ) {
         setNombre(paciente.nombre)
         setPropietario(paciente.propietario)
         setEmail(paciente.email)
         setFecha(paciente.fecha)
         setSintomas(paciente.sintomas)
      }
   }, [paciente])

  return ( 
      <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10">
         <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
         <p className="text-lg mt-5 text-center mb-10">Añade pacientes y <span className="text-indigo-600 font-bold">adminístralos</span></p>
      
         <form onSubmit={handleSubmit}  className="bg-white shadow-md rounded-lg py-10 px-5">
         { error && <Error><p>Todos los campos son obligatorios</p></Error> }
            <div className="mb-5">
               <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
               <input id="mascota" value={nombre} onChange={ (e) => setNombre(e.target.value)} type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre de la Mascota"/>
            </div>
            <div className="mb-5">
               <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
               <input id="propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value)} type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre del Propietario"/>
            </div>

            <div className="mb-5">
               <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
               <input id="email" value={email} onChange={ (e) => setEmail(e.target.value)} type="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Email Contacto Propietario"/>
            </div>
            
            <div className="mb-5">
               <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
               <input id="alta" value={fecha} onChange={ (e) => setFecha(e.target.value)} type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Email Contacto Propietario"/>
            </div>

            <div className="mb-5">
               <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
               <textarea id="sintomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los Síntomas"></textarea>
            </div>

            <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all" value={ paciente.id ? "Editar Paciente" : "Agregar Paciente" }/>

         </form>
      </div>
   );
}

export default Formulario;