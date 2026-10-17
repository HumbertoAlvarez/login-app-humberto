# Login App - Humberto Alvarez
Versión 1.0.0: formulario de inicio de sesión con validación de campos vacíos
Formulario de inicio de sesión con HTML, CSS y JavaScript.

## Estrategia de ramas

Se usa **GitHub Flow**: `main` siempre queda estable y cada funcionalidad se
desarrolla en una rama corta (`feature/...`) que se integra mediante un Pull
Request revisado por un compañero.

**Justificación:** elegí GitHub Flow porque este proyecto es una aplicación web pequeña, con un formulario de inicio de sesión y pocos archivos, que desarrollamos entre dos personas. Con esta estrategia la rama main siempre queda estable y lista para publicarse, y cada cambio se hace en una rama corta que se integra mediante un Pull Request revisado por la otra persona. Así se detectan errores antes de llegar a main y el historial queda ordenado. Git Flow sería demasiado pesado para este caso: exige mantener las ramas develop, release y hotfix, pensadas para productos con varias versiones en soporte y lanzamientos planificados, y aquí solo hay una versión y no hay ese nivel de complejidad. GitHub Flow también se combina bien con el workflow de GitHub Actions del proyecto, porque la verificación automática se ejecuta en cada Pull Request antes de fusionar.

## Convención de commits

Se usa Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `ci:`.