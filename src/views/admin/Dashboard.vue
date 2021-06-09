<template>
  <div>
    <MainContentHeader></MainContentHeader>
    <MainContent>
      <slot>
        <div class="content-wrapper">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-4 order-xl-2">
                <!-- Card -->
                <div class="card shadow">
                  <div class="profile-image-wrapper">
                    <img
                      src="assets/images/avatar.jpg"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="card-body">
                    <div class="text-center">
                      <h3>Nikesh Bdr. Adhikari</h3>
                      <h5 class="text-muted">Software Engineer</h5>
                      <p>
                        Ryan — the name taken by Melbourne-raised,
                        Brooklyn-based Nick Murphy — writes, performs and
                        records all of his own music.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-8 order-xl-1">
                <!-- Card -->
                <div class="card shadow">
                  <!-- Card Header -->
                  <div class="card-header">
                    <div class="bg-white border-0">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <h3 class="mb-0">My Account</h3>
                        </div>
                        <div class="col-4 text-right">
                          <a href="#!" class="btn btn-sm btn-primary"
                            >Settings</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Card Header -->

                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputEmail4">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputPassword4">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress"
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor"
                        />
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputCity">City</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputCity"
                          />
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputState">State</label>
                          <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="form-group col-md-2">
                          <label for="inputZip">Zip</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputZip"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label class="form-check-label" for="gridCheck">
                            Check me out
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                            disabled="disabled"
                          />
                          <label class="form-check-label" for="gridCheck1">
                            Check me out (disabled)
                          </label>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label class="form-check-label" for="inlineRadio1"
                            >1</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label class="form-check-label" for="inlineRadio2"
                            >2</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                            disabled
                          />
                          <label class="form-check-label" for="inlineRadio3"
                            >3 (disabled)</label
                          >
                        </div>
                      </div>

                      <div class="form-group">
                        <div
                          class="form-check form-check-inline toggle-checkbox"
                        >
                          <input type="checkbox" id="toggle-switch" />
                          <label
                            class="toggle-slider"
                            for="toggle-switch"
                          ></label>
                        </div>

                        <div
                          class="form-check form-check-inline toggle-checkbox"
                        >
                          <input
                            type="checkbox"
                            id="toggle-switch-1"
                            checked="checked"
                          />
                          <label
                            class="toggle-slider"
                            for="toggle-switch-1"
                          ></label>
                        </div>

                        <div
                          class="form-check form-check-inline toggle-checkbox"
                        >
                          <input
                            type="checkbox"
                            id="toggle-switch-2"
                            checked="checked"
                          />
                          <label
                            class="toggle-slider small"
                            for="toggle-switch-2"
                          ></label>
                        </div>
                      </div>

                      <div class="form-group">
                        <div
                          class="form-check form-check-inline toggle-checkbox"
                        >
                          <input type="checkbox" id="toggle-switch-round-1" />
                          <label
                            class="toggle-slider round"
                            for="toggle-switch-round-1"
                          ></label>
                        </div>

                        <div
                          class="form-check form-check-inline toggle-checkbox"
                        >
                          <input
                            type="checkbox"
                            id="toggle-switch-round-2"
                            checked="checked"
                          />
                          <label
                            class="toggle-slider round"
                            for="toggle-switch-round-2"
                          ></label>
                        </div>

                        <div
                          class="form-check form-check-inline toggle-checkbox"
                        >
                          <input
                            type="checkbox"
                            id="toggle-switch-round-3"
                            checked="checked"
                          />
                          <label
                            class="toggle-slider round small"
                            for="toggle-switch-round-3"
                          ></label>
                        </div>
                      </div>

                      <h4>Primary Buttons</h4>
                      <button type="submit" class="btn btn-lg btn-primary">
                        Sign in
                      </button>

                      <button type="submit" class="btn btn-outline-primary">
                        Sign in
                      </button>

                      <button type="submit" class="btn btn-primary btn-round">
                        Sign in
                      </button>

                      <br />
                      <br />
                      <br />
                      <h4>Secondary Buttons</h4>

                      <button
                        type="submit"
                        class="btn btn-secondary disabled"
                        disabled="disabled"
                      >
                        Sign in
                      </button>

                      <button type="submit" class="btn btn-outline-secondary">
                        Sign in
                      </button>

                      <button type="submit" class="btn btn-secondary btn-round">
                        Sign in
                      </button>

                      <br />
                      <br />
                      <br />
                      <h4>Subtle Buttons</h4>

                      <button type="submit" class="btn btn-sm btn-subtle">
                        Sign in
                      </button>

                      <button type="submit" class="btn btn-outline-subtle">
                        Sign in
                      </button>

                      <button type="submit" class="btn btn-subtle btn-round">
                        Sign in
                      </button>

                      <br />
                      <br />
                      <br />
                      <h4>Danger Buttons</h4>

                      <button type="submit" class="btn btn-danger">
                        Sign in
                      </button>

                      <button type="submit" class="btn btn-outline-danger">
                        Sign in
                      </button>

                      <button type="submit" class="btn btn-danger btn-round">
                        Sign in
                      </button>

                      <br />
                      <br />
                      <br />
                      <h4>Dropdown Buttons</h4>
                      <div class="btn-group" role="group">
                        <button
                          id="btnGroupDrop1"
                          type="button"
                          class="btn btn-secondary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="btnGroupDrop1"
                        >
                          <a class="dropdown-item" href="#">Dropdown link</a>
                          <a class="dropdown-item" href="#">Dropdown link</a>
                        </div>
                      </div>

                      <div class="btn-group" role="group">
                        <button
                          id="btnGroupDrop1"
                          type="button"
                          class="btn btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="btnGroupDrop1"
                        >
                          <a class="dropdown-item" href="#">Dropdown link</a>
                          <a class="dropdown-item" href="#">Dropdown link</a>
                        </div>
                      </div>

                      <br />
                      <br />
                      <br />
                      <h4>Buttons With Icons</h4>
                      <button type="submit" class="btn btn-primary">
                        <i class="fas fa-check"></i>
                        Sign in
                      </button>

                      <br />
                      <br />
                      <br />
                      <h4>Buttons With Icons Only</h4>
                      <button type="submit" class="btn btn-primary btn-circle">
                        <i class="fas fa-check"></i>
                      </button>

                      <button
                        type="submit"
                        class="btn btn-sm btn-outline-primary btn-circle"
                      >
                        <i class="fas fa-check"></i>
                      </button>

                      <button
                        type="submit"
                        class="btn btn-sm btn-outline-danger btn-circle"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>

                      <button type="submit" class="btn btn-danger btn-circle">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <!-- End Card -->
              </div>
            </div>
          </div>
        </div>
      </slot>
    </MainContent>
  </div>
</template>

<script>
import MainContentHeader from '@/components/layouts/MainContentHeader'
import MainContent from '@/components/layouts/MainContent'

export default {
  components: {
    MainContentHeader,
    MainContent,
  },
}
</script>

<style></style>
