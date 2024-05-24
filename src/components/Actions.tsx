export const Actions = () => {
    return(
        <div className="flex justify-between text-sm">
            <p>5 Itens Restante</p>
            <div className="flex gap-4">
                <button>Todos</button>
                <button>Ativos</button>
                <button>Incompletos</button>
            </div>
            <button>Limpar Completos</button>
        </div>
    )
}