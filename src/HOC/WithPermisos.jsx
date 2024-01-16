const WithPermisos = (WrapperdComponent) => {
  const ComponentWithPermisos = (props) => {
    return <WrapperdComponent {...props} propiedadNueva='Hola Mundo' />
  }

  return ComponentWithPermisos // Return the component with permissions
}

export default WithPermisos
