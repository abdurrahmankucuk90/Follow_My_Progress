import React from "react";

class LifeCycleMethods extends React.Component {
    //! 1-) Bir componentin olsuturulmasinda cagrilir
    constructor(props) {
        console.log("Contructor running");
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleInc = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    //! 3-) Bir component DOM agacina eklendiginde calistirilir.
    //! (İlk render sonrasi).
    //! Her yasam dongusu icin bir kere calisir.
    componentDidMount() {
        console.log("Mounted");
    }

    //! 4-) Bu metot ilk render haric dige tüm render'lardan sonra cagrilir.
    //!  prevState ve prevProps degerlerini parametre olarak alabilir.
    componentDidUpdate() {
        console.log("Updated");
    }

    //! 5-) Bir component DOM agacindan kaldiriltiktan hemen sonra cagirlir.
    componentWillUnmount() {
        console.log("Unmounting");
    }

    render() {
        //! 2-) Her bir render'da cagrilir
        console.log("Rendered");
        return (
            <div className="container text-center">
                <h1 className="text-danger">LIFECYCLE METHODS</h1>
                <h3>COUNT={this.state.count}</h3>
                <button className="btn btn-info" onClick={this.handleInc}>
                    INC
                </button>
            </div>
        );
    }
}
export default LifeCycleMethods;
