import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
};

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr>
                <td>{index+1}</td>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => props.removeCharacter(index)}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
};

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table className="table table-dark">
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
};

export default Table;
