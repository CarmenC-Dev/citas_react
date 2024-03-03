import Paciente from "./Paciente";
function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

    return (
        <div className="md:w-1/2 lg:w-3/5">
            <section className="md:h-screen overflow-y-scroll">
                { pacientes && pacientes.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                        <p className="text-lg mt-5 mb-7 text-center">
                            Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                        </p>

                        { pacientes.map( paciente => (
                            <Paciente
                                key = {paciente.id}
                                paciente = {paciente}
                                setPaciente = {setPaciente}
                                eliminarPaciente = {eliminarPaciente}
                            />
                        ) ) }
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                        <p className="text-lg mt-5 mb-7 text-center">
                            Comienza agregando pacientes <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                        </p>
                    </>  
                )}
            </section>
        </div>
     );
}

export default ListadoPacientes;