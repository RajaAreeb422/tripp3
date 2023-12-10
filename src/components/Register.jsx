const Register = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="register-outer">
                <div className="register-inner">
                  <form action="#">
                    <label for="lang">I am registering as a:</label>
                    <select name="languages" id="lang">
                      <option value="Community Member">Community Member</option>
                      <option value="Community Leader">Community Leader</option>
                    </select>
                   <button className="submits"> Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
