<template>
  <div>
    <!-- Content Body Wrapper -->
    <div class="content-body mt--60">
      <slot></slot>
      <div class="content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <!-- Table Card -->
              <div class="card shadow">
                <!-- Table Card Header -->
                <div class="card-header border-0">
                  <div class="row align-items-center">
                    <div class="col">
                      <h3>Table</h3>
                    </div>
                    <div class="col text-right">
                      <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                    </div>
                  </div>
                </div>
                <!-- End Table Card Header -->

                <!-- Table Body -->
                <div class="table-responsive">
                  <table class="table align-items-center">
                    <thead class="thead-light">
                      <tr>
                        <th>Project</th>
                        <th>Budget</th>
                        <th>Status</th>
                        <th>Users</th>
                        <th>Completion</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody class="list">
                      <tr>
                        <td>Argon Data Grid</td>
                        <td>2,0000</td>
                        <td>
                          <span class="badge bg-outline-primary">
                            Completed
                          </span>
                        </td>
                        <td>Nikesh</td>
                        <td>90%</td>
                        <td>
                          <a
                            href="#"
                            class="btn btn-sm btn-outline-primary btn-circle"
                          >
                            <i class="fas fa-check"></i>
                          </a>

                          <a
                            href="#"
                            class="btn btn-sm btn-outline-danger btn-circle"
                          >
                            <i class="far fa-trash-alt"></i>
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>Argon Data Grid</td>
                        <td>2,0000</td>
                        <td>
                          <span class="badge bg-primary"> Completed </span>
                        </td>
                        <td>Nikesh</td>
                        <td>90%</td>
                        <td>
                          <a
                            href="#"
                            class="btn btn-sm btn-outline-primary btn-circle"
                          >
                            <i class="fas fa-check"></i>
                          </a>

                          <a
                            href="#"
                            class="btn btn-sm btn-outline-danger btn-circle"
                          >
                            <i class="far fa-trash-alt"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- End Table Body -->

                <!-- Footer Pagination -->
                <div class="card-footer d-flex justify-content-end">
                  <ul class="pagination">
                    <li class="page-item prev-page disabled">
                      <a class="page-link" aria-label="Previous">
                        <span aria-hidden="true">
                          <i class="fa fa-angle-left" aria-hidden="true"></i>
                        </span>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link">3</a>
                    </li>
                    <li class="page-item next-page">
                      <a class="page-link" aria-label="Next">
                        <span aria-hidden="true">
                          <i
                            class="fa fa-angle-right"
                            aria-hidden="true"
                          ></i> </span
                      ></a>
                    </li>
                  </ul>
                </div>
                <!-- End Footer Pagination -->
              </div>
              <!-- End Table Card -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content Body Wrapper -->
  </div>
</template>

<script>
export default {}
</script>

<style></style>
